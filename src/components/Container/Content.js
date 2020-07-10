import React from "react"
import "./Content.scss"

const Content = (props) => {
  const { data, click } = props

  const categories = data
    .map((post) => ({
      ...post,
      category: post.categories[0].title,
      categoryIndex: post.categories[0].index,
    }))
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.category]: (acc[curr.category] || []).concat(curr),
      }),
      {}
    )
  console.log(categories)

  const sortedCategorizedPosts = Object.entries(categories)
    .sort((a, b) => {
      // if
      return a[1][0].categoryIndex - b[1][0].categoryIndex
      // return -1
      // else return 1
    })
    .map(([category, posts]) =>
      posts
        .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0))
        .map((post) => (
          <div className={category} key={post.title}>
            <p className="Title">{post.body[0].children[0].text}</p>
            <img
              className={
                `Image` +
                (post.image.metadata.dimensions.width >= 1200
                  ? " Landscape"
                  : " Portrait")
              }
              src={post.image.url}
              alt={post.body[0].children[0].text}
              onClick={(ev) => click(ev)}
            />
          </div>
        ))
    )

  return (
    <div className="allContent">
      <div className="SideBarleft"></div>
      <div className="Content">{sortedCategorizedPosts}</div>
      <div className="SideBarright"></div>
    </div>
  )
}

export default Content
