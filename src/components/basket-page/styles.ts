import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 30,
    marginTop: 60,
  },
  mainContainer: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  priceText: {
    color: '#000',
  },
  foodName: {
    color: '#000',
    fontFamily: 'YanoneKaffee',
    fontWeight: '700',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listHeadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    height: 60,
    paddingLeft: 15,
    width: '75%',
    justifyContent: 'space-between',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    display: 'flex',
    alignContent: 'center',
    height: 50,
  },
  counterButton: {
    height: 120,
    width: 25,
    margin: 0,
    padding: 0,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  trashIcon: {
    width: 40,
    height: 40,
  },
  rightSection: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: 60,
    justifyContent: 'space-between',
  },
  footer: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
  },
  footerItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    width: '100%',
  },
  paymentButton: {
    borderRadius: 10,
    backgroundColor: 'gold',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  paymentButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  paymentIcon: {
    position: 'absolute',
    right: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
