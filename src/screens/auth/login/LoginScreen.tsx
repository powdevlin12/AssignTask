import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from '../../../assets/images';
import {TextComponent, TitleComponent} from '../../../components/Text';
import {
  InputComponent,
  InputPasswordComponent,
} from '../../../components/input';
import {
  Container,
  RowComponent,
  SectionComponent,
} from '../../../components/layout';
import {WIDTH} from '../../../constants/dimension';
import theme from '../../../constants/theme';
import {UserModel} from '../../../models/UserModel';
import {Facebook, Google, User} from 'iconsax-react-native';
import {ButtonComponent} from '../../../components/button';
import lodash from '../../../utils/lodash';
import auth from '@react-native-firebase/auth';
import {AuthStackParamList} from '../../../navigation/auth.navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const initUser: UserModel = {
  email: '',
  password: '',
  data: function (): UserModel {
    throw new Error('Function not implemented.');
  },
};

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen = ({navigation}: Props) => {
  const [user, setUser] = useState<UserModel>(initUser);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeValue = (key: keyof UserModel, value: string) => {
    setUser(prev => ({...prev, [key]: value}));
  };

  const signInHandler = () => {
    if (lodash.isEmpty(user.email) || lodash.isEmpty(user.password)) {
      setError('Not be empty email and password');
      return;
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(user.email as string, user.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }

        if (error.code === 'auth/invalid-credential') {
          setError('email or password is incorrect !');
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <View style={styles.container}>
        <Image
          source={images.common.play}
          resizeMode="center"
          style={styles.img}
        />
        <SectionComponent styles={{alignItems: 'center'}}>
          <TitleComponent
            text="Login"
            size={theme.fontSize.titleLarge}
            flex={0}
          />
          <TextComponent
            text="Please enter your account"
            flex={0}
            color={theme.colors.gray2}
          />
        </SectionComponent>
        <SectionComponent styles={{width: '100%', marginBottom: theme.size[3]}}>
          <InputComponent
            value={user.email}
            changeValueHandle={val => handleChangeValue('email', val)}
            prefix={<User color={theme.colors.text} size={22} />}
            placeholder="Email"
          />
        </SectionComponent>
        <SectionComponent styles={{width: '100%'}}>
          <InputPasswordComponent
            placeholder="Password"
            changeValueHandle={val => handleChangeValue('password', val)}
          />
        </SectionComponent>
        {!lodash.isEmpty(error) && (
          <SectionComponent
            styles={{
              alignItems: 'flex-start',
              width: '100%',
            }}>
            <TextComponent text={error} color={theme.colors.danger} flex={0} />
          </SectionComponent>
        )}
        <SectionComponent styles={{width: '100%'}}>
          <RowComponent
            justifyContent="flex-start"
            onPress={() => navigation.navigate('Register')}>
            <TextComponent text="Don't have an account? " flex={0} />
            <TextComponent
              text="Register"
              font={theme.fontFamilies.MontserratSemiBold}
              flex={0}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent styles={{marginBottom: theme.size[3]}}>
          <ButtonComponent
            title="Sign In"
            onPress={signInHandler}
            styles={{
              paddingVertical: theme.size[4] * 0.75,
              borderRadius: theme.border.large,
            }}
            isLoading={isLoading}
          />
        </SectionComponent>
        <SectionComponent styles={{marginBottom: theme.size[3]}}>
          <ButtonComponent
            icon={<Google size="28" color="#FF8A65" />}
            onPress={signInHandler}
            styles={{
              paddingVertical: theme.size[4] * 0.75,
              borderRadius: theme.border.large,
            }}
            title=""
            isLoading={isLoading}
            backgroundColor={theme.colors.white}
          />
        </SectionComponent>
        <SectionComponent>
          <ButtonComponent
            title=""
            icon={<Facebook size="28" color={theme.colors.blue} />}
            onPress={signInHandler}
            styles={{
              paddingVertical: theme.size[4] * 0.75,
              borderRadius: theme.border.large,
            }}
            backgroundColor={theme.colors.white}
            isLoading={isLoading}
          />
        </SectionComponent>
      </View>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: WIDTH * 0.75,
    height: WIDTH * 0.6,
  },
});
