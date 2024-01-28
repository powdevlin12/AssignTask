import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from '../../../assets/images';
import {TextComponent, TitleComponent} from '../../../components/Text';
import {
  InputComponent,
  InputPasswordComponent,
} from '../../../components/input';
import {Container, SectionComponent} from '../../../components/layout';
import {WIDTH} from '../../../constants/dimension';
import theme from '../../../constants/theme';
import {UserModel} from '../../../models/UserModel';
import {User} from 'iconsax-react-native';
import {ButtonComponent} from '../../../components/button';
import lodash from '../../../utils/lodash';
import auth from '@react-native-firebase/auth';

const initUser: UserModel = {
  username: '',
  password: '',
};

const LoginScreen = () => {
  const [user, setUser] = useState<UserModel>(initUser);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeValue = (key: keyof UserModel, value: string) => {
    setUser(prev => ({...prev, [key]: value}));
  };

  const signInHandler = () => {
    if (lodash.isEmpty(user.username) || lodash.isEmpty(user.password)) {
      setError('Not be empty username and password');
      return;
    }

    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(user.username, user.password)
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
        <SectionComponent>
          <TitleComponent
            text="Login"
            size={theme.fontSize.titleLarge}
            flex={0}
          />
        </SectionComponent>
        <SectionComponent styles={{width: '100%', marginBottom: theme.size[3]}}>
          <InputComponent
            title="Username"
            value={user.username}
            changeValueHandle={val => handleChangeValue('username', val)}
            prefix={<User color={theme.colors.text} size={22} />}
          />
        </SectionComponent>
        <SectionComponent styles={{width: '100%'}}>
          <InputPasswordComponent
            title="Password"
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
        <SectionComponent>
          <ButtonComponent
            title="Sign In"
            onPress={signInHandler}
            styles={{
              paddingVertical: theme.size[4],
              paddingHorizontal: theme.size[6],
              borderRadius: theme.border.large,
            }}
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
