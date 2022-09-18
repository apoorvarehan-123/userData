import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



import SkeletonContent from 'react-native-skeleton-content';

const SkeltonContent = () => {
  return (
    <SkeletonContent
    containerStyle={{ flex: 1, width: 300 }}
    isLoading={false}
    layout={[
      { key: 1, width: 220, height: 20, marginBottom: 6 },
      { key: 2, width: 180, height: 20, marginBottom: 6 }
    ]}
  >
    <Text>Your content</Text>
    <Text >Other content</Text>
  </SkeletonContent>
  )
}

export default SkeltonContent

const styles = StyleSheet.create({})