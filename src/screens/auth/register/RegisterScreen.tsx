import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Container,
  RowComponent,
  SectionComponent,
} from '../../../components/layout';
import {TextComponent, TitleComponent} from '../../../components/Text';
import theme from '../../../constants/theme';
import {UserModel} from '../../../models/UserModel';
import {
  InputComponent,
  InputPasswordComponent,
} from '../../../components/input';
import {Google, Headphone, UserTick} from 'iconsax-react-native';
import {ButtonComponent} from '../../../components/button';
import {Image} from 'react-native';
import images from '../../../assets/images';
import {WIDTH} from '../../../constants/dimension';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/auth.navigation';

interface Password {
  password: string;
  confirmPassword: string;
}

const initValue: UserModel & Password = {
  confirmPassword: '',
  password: '',
  address: {
    city: '',
    street: '',
    zipcode: '',
  },
  email: '',
  id: '',
  name: '',
  phone: '',
  website: '',
};

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen = ({navigation}: Props) => {
  const [account, setAccount] = useState<UserModel & Password>(initValue);
  console.log('🚀 ~ RegisterScreen ~ account:', account);

  const handleChangeValue = (
    key: keyof (UserModel & Password),
    value: string,
  ) => {
    setAccount(prev => ({...prev, [key]: value}));
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RowComponent justifyContent="center">
          <Image
            source={images.common.play}
            resizeMode="center"
            style={styles.img}
          />
        </RowComponent>
        <SectionComponent>
          <RowComponent justifyContent="center">
            <TitleComponent
              text="Create your account"
              size={theme.fontSize.titleLarge}
            />
          </RowComponent>
          <RowComponent justifyContent="center">
            <TextComponent
              text="Please enter info to create account"
              size={theme.fontSize.note}
              color={theme.colors.gray2}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <InputComponent
            placeholder="Email"
            changeValueHandle={val => handleChangeValue('email', val)}
            value={account?.email}
            allowClear
            prefix={<Google size="22" color={theme.colors.text} />}
          />
        </SectionComponent>

        <SectionComponent>
          <InputComponent
            placeholder="Fullname"
            changeValueHandle={val => handleChangeValue('name', val)}
            value={account?.name}
            allowClear
            prefix={<UserTick size="22" color={theme.colors.text} />}
          />
        </SectionComponent>

        <SectionComponent>
          <InputComponent
            placeholder="Phone number"
            changeValueHandle={val => handleChangeValue('phone', val)}
            value={account?.phone}
            allowClear
            prefix={<Headphone size="22" color={theme.colors.text} />}
          />
        </SectionComponent>

        <SectionComponent>
          <InputPasswordComponent
            changeValueHandle={val => handleChangeValue('password', val)}
            placeholder="Type your password"
          />
        </SectionComponent>
        <SectionComponent>
          <InputPasswordComponent
            changeValueHandle={val => handleChangeValue('confirmPassword', val)}
            placeholder="Retype your password"
          />
        </SectionComponent>
        <SectionComponent>
          <ButtonComponent title="Register" />
        </SectionComponent>
        <SectionComponent styles={{width: '100%'}}>
          <RowComponent
            justifyContent="flex-start"
            onPress={() => navigation.navigate('Login')}>
            <TextComponent text="Do yout have an account? " flex={0} />
            <TextComponent
              text="Sign up"
              font={theme.fontFamilies.MontserratSemiBold}
              flex={0}
            />
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  img: {
    width: WIDTH * 0.75,
    height: WIDTH * 0.6,
  },
});
