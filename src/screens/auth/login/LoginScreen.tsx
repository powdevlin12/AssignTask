import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from '../../../assets/images';
import {TitleComponent} from '../../../components/Text';
import {
  InputComponent,
  InputPasswordComponent,
} from '../../../components/input';
import {Container, SectionComponent} from '../../../components/layout';
import {WIDTH} from '../../../constants/dimension';
import theme from '../../../constants/theme';
import {UserModel} from '../../../models/UserModel';
import {User} from 'iconsax-react-native';

const initUser: UserModel = {
  username: '',
  password: '',
};

const LoginScreen = () => {
  const [user, setUser] = useState<UserModel>(initUser);

  const handleChangeValue = (key: keyof UserModel, value: string) => {
    setUser(prev => ({...prev, [key]: value}));
  };

  return (
    <Container>
      <View style={styles.container}>
        <Image
          source={images.common.play}
          resizeMode="center"
          style={styles.img}
        />
        <TitleComponent
          text="Login"
          size={theme.fontSize.titleLarge}
          flex={0}
        />
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
            isPassword={true}
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
