import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
export default class IconExample extends React.Component {
  render() {
    return (

    <View>
      <AntDesign name="left" size={20} color="white" />
      <View style={{marginTop:13}}>
        <Text style={{color:"white", fontSize:18}}>Online</Text>
        <View>
            <View style={{marginTop:10}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/nn.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bb.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bbv.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bfb.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bbv.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/gfg.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/nn.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/vv.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bbv.jpg")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/vv.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/nn.jpg")} />
              </TouchableOpacity>
          </ScrollView>
            </View>
        </View>
      </View>
      <View style={{marginTop:25}}>
        <Text style={{color:"white", fontSize:18}}>Messages</Text>


        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", paddingRight:10, marginTop:20}}>
          <View style={{flexDirection:'row'}}>

            <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bb.jpg")} />
            <View>
              <Text style={{color:"white", fontSize:16, fontWeight:'bold'}}>James</Text>
              <Text style={{color:"white"}}>Me: Thank you that was</Text>
            </View>
          </View>
          <Ionicons name="md-eye-sharp" size={15} color="white" />
        </View>

        <View style={{borderWidth:1, borderColor:"white", opacity:.1, marginTop:18}}></View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", paddingRight:10, marginTop:20}}>
          <View style={{flexDirection:'row'}}>

            <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/bfb.png")} />
            <View>
              <Text style={{color:"white", fontSize:16, fontWeight:'bold'}}>James</Text>
              <Text style={{color:"white"}}>Me: Thank you that was</Text>
            </View>
          </View>
          <Ionicons name="md-eye-sharp" size={15} color="white" />
        </View>

        <View style={{borderWidth:1, borderColor:"white", opacity:.1, marginTop:18}}></View>


        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", paddingRight:10, marginTop:20}}>
          <View style={{flexDirection:'row'}}>

            <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/gfg.jpg")} />
            <View>
              <Text style={{color:"white", fontSize:16, fontWeight:'bold'}}>James</Text>
              <Text style={{color:"white"}}>Me: Thank you that was</Text>
            </View>
          </View>
          <Ionicons name="md-eye-sharp" size={15} color="white" />
        </View>

        <View style={{borderWidth:1, borderColor:"white", opacity:.1, marginTop:18}}></View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", paddingRight:10, marginTop:20}}>
          <View style={{flexDirection:'row'}}>

            <Image style={{width:60, height:60, borderRadius:100, borderWidth:2, borderColor:"#ff748c", marginRight:7}} source={require("./assets/vv.png")} />
            <View>
              <Text style={{color:"white", fontSize:16, fontWeight:'bold'}}>James</Text>
              <Text style={{color:"white"}}>Me: Thank you that was</Text>
            </View>
          </View>
          <Ionicons name="md-eye-sharp" size={15} color="white" />
        </View>

        <View style={{borderWidth:1, borderColor:"white", opacity:.1, marginTop:18}}></View>
      </View>
    </View>
    )
    ;
  }
}