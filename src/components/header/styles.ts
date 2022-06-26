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
    justifyContent: 'space-between',
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
  deliverText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '700',
  },
  deliverToText: {
    fontSize: 12,
    color: '#727272',
  },
  profileImage: {
    borderRadius: 8,
    width: 40,
    height: 40,
  },
});

export default styles;
