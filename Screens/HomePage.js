import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { Card, Title, Paragraph, Searchbar, Chip, BottomNavigation } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { ImagePicker } from 'react-native-image-picker';


//----------------------------------HOME ROUTE---------------------------------------//
const HomeRoute = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  const handleFilterPress = (filter) => {
    // Placeholder logic for filter press
    console.log(`Filter pressed: ${filter}`);
  };

  return (
    <View style={styles.scene}>
        <Card style={styles.card}>
            <Card.Content>
                <Title style={styles.welcomeText}>Welcome to FlavorQuest</Title>
                <Paragraph style={styles.subtitleText}>What do you want to cook today?</Paragraph>
                <Searchbar placeholder="Search recipes" style={styles.searchBar}
                value={searchQuery} onChangeText={(text) => setSearchQuery(text)} onSubmitEditing={handleSearch}/>
            </Card.Content>
        </Card>

        <Card style={styles.card}>
            <Card.Content>
                  <Title>Filters</Title>
                      <View style={styles.chipContainer}>
                        <Chip onPress={() => handleFilterPress('Breakfast')} style={styles.chip}>Breakfast </Chip>
                        <Chip onPress={() => handleFilterPress('Lunch')} style={styles.chip}>Lunch</Chip>
                        <Chip onPress={() => handleFilterPress('Dinner')} style={styles.chip}>Dinner</Chip>
                      </View>
            </Card.Content>
        </Card>
  </View>
  );
};
//----------------------------------HOME ROUTE---------------------------------------//


//----------------------------------FEED ROUTE---------------------------------------//
const FeedRoute = ({ user, item, handleLike, handleShare, handleComment }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const formatTimestamp = (timestamp) => new Date(timestamp).toLocaleString();

  const selectImage = () => { const options = {
      title: 'Select Image', storageOptions: {skipBackup: true, path: 'images', },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });  
  };

  
    return (
      <ScrollView style={styles.scrollView}>
          <View style={styles.container}>

          {user && 
          <View style={styles.userContainer}>
            <Feather name="user" size={24} color="#3498db" />
            <Text style={styles.username}>{user.name}</Text>
          </View>}

          <Text style={styles.timestamp}>{item ? formatTimestamp(item.timestamp) : ''}</Text>
          <Text style={styles.caption}>{`${user ? user.name : 'User'}'s caption goes here...`}</Text>

  
          <View style={styles.actions}>
            <TouchableOpacity onPress={() => handleLike(item?.id)} style={styles.actionButton}>
              <Feather name="heart" size={18} color="#e74c3c" />
              <Text>{item?.likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleComment(item?.id)} style={styles.actionButton}>
              <Feather name="message-circle" size={18} color="#2ecc71" />
              <Text>{item?.comments}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleShare(item?.id)} style={styles.shareButton}>
              <Feather name="send" size={18} color="#008cff" />
              <Text>{item?.shares}</Text>
            </TouchableOpacity>
          </View>
      </View>

            {/* POST BUTTON PARA MU GAWAS ANG MODAL */}
              <TouchableOpacity onPress={toggleModal} style={styles.postButton}>
                <Feather name="edit" size={24} color="white" />
              </TouchableOpacity>

              <Modal animationType="slide" transparent={true} visible={modalVisible} 
              onRequestClose={toggleModal}>

                  <View style={styles.modalContainer}>
                      <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Feather name="x" size={26} color="white" />
                      </TouchableOpacity>

                          {selectedImage && (<Image source={{ uri: selectedImage }} 
                          style={styles.selectedImage}/>)}

                          <TextInput placeholder="What's on your mind?" multiline style={styles.modalInput} 
                          value={postContent} onChangeText={(text) => setPostContent(text)} />

                      <TouchableOpacity style={styles.addImageButton} onPress={selectImage}>
                        <Text style={styles.addImageButtonText}>Add Image</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.postButtonModal}  onPress={() => {
                        console.log('Post content:', postContent);
                        console.log('Selected image:', selectedImage);
                        toggleModal(); }}>
                        <Text style={styles.postButtonText}>POST</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
      </ScrollView>
  );
};

//----------------------------------FEED ROUTE---------------------------------------//

//----------------------------------PROFILE ROUTE------------------------------------//
const ProfileRoute = () => {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const [recipes, setRecipes] = useState(1);
  const [likes, setLikes] = useState(1);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setFollowers(isFollowing ? followers - 1 : followers + 1);
  };


  return (
    <View style={styles.profilecontainer}>
      <Image
        source={{ uri: 'https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg' }}
        style={styles.profileImage}
      />

      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.bio}>Software Developer</Text>

      <View style={styles.followContainer}>
        <Text style={styles.followCount}>{followers} Followers</Text>
        <Text style={styles.followCount}>{following} Following</Text>
      </View>

      <View style={styles.recipeLikesContainer}>
        <Text style={styles.recipeLikes}>{recipes} Recipes</Text>
        <Text style={styles.recipeLikes}>{likes} Likes</Text>
      </View>

      <TouchableOpacity style={styles.followButton} onPress={handleFollowToggle}>
        <Text style={styles.followButtonText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};


//----------------------------------PROFILE ROUTE------------------------------------//

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home' },
    { key: 'feed', title: 'Feed', focusedIcon: 'newspaper', unfocusedIcon: 'newspaper' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account' },
  ]);


  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    feed: FeedRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} 
      barStyle={styles.bottomNavigation} activeColor="#FF914D"/>
  );
};

//------------------------------------ STYLESHEET ------------------------------------------------//

const styles = StyleSheet.create({
//-------HOMEROUTE STYLE--------//
  bottomNavigation: {
    backgroundColor: 'white',
  },

  scene: {
    flex: 1,
    backgroundColor: '#fff',
  },

  card: {
    margin: 16,
    marginTop: 90,
    borderRadius: 10,
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 8,
  },

  subtitleText: {
    marginLeft: 16,
    fontSize: 17,
    marginTop: 8,
    marginBottom: 16,
  },

  searchBar: {
    backgroundColor: '#FF914D',
    marginBottom: 16,
    borderRadius: 10,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 16,
  },

  chip: {
    backgroundColor: '#FF914D',
    marginRight: 8,
    marginBottom: 8,
  },
//-------HOMEROUTE STYLE--------//


//-------FEEDROUTE STYLE--------//
scrollView: {
  flex: 1,
},

container: {
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  paddingVertical: 16,
  marginTop: 60,
},

userContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  marginLeft: 10,
},

username: {
  marginLeft: 8,
  fontSize: 16,
  fontWeight: 'bold',
  marginLeft: 20,
},

timestamp: {
  color: '#aaa',
  marginTop: 8,
  marginLeft: 10,
},

caption: {
  fontSize: 18,
  marginTop: 2,
  marginLeft: 10,
  color: 'black',
},

actions: {
  flexDirection: 'row',
  marginTop: 8,
},

actionButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  marginLeft: 8.5,
  marginRight: 20,
},

shareButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 8,
  borderRadius: 4,
  marginLeft: 10,
},

postButton: {
  position: 'absolute',
  bottom: 30,
  right: 16,
  backgroundColor: '#FF914D',
  borderRadius: 30,
  padding: 15,
  alignItems: 'center',
  justifyContent: 'center',
},

//------FEEDROUTE MODAL------//
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},

modalInput: {
  width: '80%',
  height: 100,
  backgroundColor: 'white',
  borderRadius: 8,
  padding: 8,
  marginBottom: 16,
},

closeButton: {
  position: 'absolute',
  top: 330,
  right: 40,
},

postButtonModal: {
  backgroundColor: '#FF914D',
  borderRadius: 15,
  padding: 10,
  marginTop:-40,
  marginLeft:130,
  alignItems: 'center',
},

postButtonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},

selectedImage: {
  width: '100%',
  height: 200,
  resizeMode: 'cover',
  borderRadius: 8,
  marginVertical: 10,
},

addImageButton: {
  backgroundColor: '#3498db',
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginTop: 10,
  marginRight:140,
  alignItems: 'center',
  borderRadius:15,
},

addImageButtonText: {
  color: 'white',
  fontSize: 16,
},
//-------FEEDROUTE STYLE--------//


//-----PROFILEROUTE STYLE------//
profileContainer: {
  alignItems: 'center',
  padding: 16,
},

profileImage: {
  width: 110,
  height: 110,
  borderRadius: 75,
  marginTop: 100,
  marginBottom: 16,
  marginLeft: 30,
},

username: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 8,
  marginLeft: 40,
},

bio: {
  fontSize: 16,
  marginBottom: 8,
  marginLeft: 40,
},

followContainer: {
  flexDirection: 'row',
},

followCount: {
  marginRight: 16,
  fontSize: 16,
  marginLeft: 40,
  marginTop: 20,
},

recipeLikesContainer: {
  flexDirection: 'row',
  marginBottom: 16,
},

recipeLikes: {
  marginRight: 16,
  fontSize: 16,
  marginBottom:40, 
  marginLeft: 40,
},

followButton: {
  backgroundColor: '#3498db',
  padding: 8,
  borderRadius: 10,
  marginBottom: -60,
  marginLeft: 280,
  width: 78,
},

followButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

editButton: {
  backgroundColor: '#FF914D',
  padding: 8,
  borderRadius: 10,
  width:90,
  marginLeft: 280,
  marginTop: -180,
},

editButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

//-----PROFILEROUTE STYLE------//
});

export default HomePage;