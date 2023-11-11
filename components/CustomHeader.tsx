import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.bike} source={require('@/assets/images/bike.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery • now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <Ionicons name='chevron-down' size={22} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' size={28} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: 'white'
  },
  container: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    paddingHorizontal:20,
    marginTop:19
  },
  bike: {
    width: 60,
    height: 60,
    backgroundColor:'#F0F6FB',
    borderRadius: 30
  },
  titleContainer: {
    flex:1
  },
  title: {
    fontSize: 14,
    color: Colors.medium
  },
  subtitle:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  locationName: {
    flexDirection: 'row', alignItems: 'center'
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 14,
    borderRadius: 28
  }
})

export default CustomHeader