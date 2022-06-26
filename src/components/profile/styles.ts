import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 45,
    backgroundColor: '#fff',
    height: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '#f1f1f1',
    marginHorizontal: 25,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: '700',
  },
  infoContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  userInfo: {
    paddingLeft: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
  },
  email: {
    fontSize: 14,
    color: '#737373',
    fontWeight: '600',
  },
});
