//Ahmad Naufal Ibad bin Mohd Lazim 1910457

import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#CCD5DC',
        paddingHorizontal: 40,
        justifyContent: 'center',
        marginTop: 40,
    },
    
      header: {
        fontSize: 24,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 30,
        borderBottomColor: '#1C4867',
        borderBottomWidth: 4,
    },
    
      input: {
        alignSelf: 'stretch',
        fontSize: 16,
        height: 40,
        marginTop: 10,
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: '#0A5991',
    },
    
        button:{
          alignSelf: 'stretch',
          borderRadius: 8,
          alignItems: 'center',
          padding: 12,
          backgroundColor: '#0B588E',
          marginTop: 40,
        },
    
        btntext:{
          color: 'white',
          fontWeight: 'bold',
        }
});

export default styles;