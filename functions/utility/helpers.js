exports.verifyIdentity = async (faunadb, payload) => {
  const { Identify, Ref, Collection } = faunadb.query

  const identify = Identify(
    Ref(Collection('admins'), payload?.id),
    payload?.secret
  )

  console.log(identify)

  return identify
}
