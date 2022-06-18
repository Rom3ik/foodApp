import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 45,
  },
  centered: {
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    position: 'relative',
  },
  cartIcon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#f1f7f7',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 7,
    borderRadius: 10,
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

export default styles;
