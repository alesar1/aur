# Contributor: Chocopwowwa <chocopowwwa@gmail.com>
# Contributor: Rafed Ramzi <rafedramzi@gmail.com>

pkgname=sweet-gtk-theme-dark-v40
_pkgname=Sweet-Dark-v40
pkgver=2.0.r23.5b53ee2
pkgrel=1
pkgdesc="Light and dark colorful Gtk3.20+ theme"
arch=('any')
url='https://github.com/EliverLara/Sweet'
license=('GPL3')
conflicts=('sweet-theme-dark')
replaces=('sweet-theme-dark')
source=(https://dl1.pling.com/api/files/download/j/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2Mjg1MzkwODciLCJ1IjpudWxsLCJsdCI6ImRvd25sb2FkIiwicyI6IjMwMzAzMDZhZmY1NTljMGUwNGU3NDhkZTZhYzRiZjFlNTU3NzFiOTJiNDVjMmU0NTg1MzdiMjA4OTA5ZjM5MjI5MmEzMjM4MTI3MWQxOGVlYjdlOWFmYTQyOTEyYzA5ZGI4ZGE3M2NiZjQ2NjMyOGNkN2IxZDRjNWZkZTFkZDBhIiwidCI6MTYzMTI3NzM1MCwic3RmcCI6bnVsbCwic3RpcCI6bnVsbH0.-fWbtNV1S2le8G_GSMmL_mFo_Cez2Q3HjNWawOccFx8/Sweet-Dark-v40.tar.xz)
md5sums=('46f370e1a2a8fa9f3f2314a132836090')

package() {
  mkdir -p "${pkgdir}/usr/share/themes/${_pkgname}"
  cp -r "${srcdir}/${_pkgname}" "${pkgdir}/usr/share/themes/"
}
