# Maintainer: Oscar Morante <spacepluk@gmail.com>

_version=2018.2.7
_build=f1
_randomstring=4ebd28dd9664
_prefix=/opt/Unity

pkgname=unity-editor-doc
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Unity User Manual and Scripting API Reference."
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
source=("https://docs.unity3d.com/2018.2/Documentation/uploads/UnityDocumentation.zip")
sha1sums=('7005aa2ecc933a7cbccd4477837f7755bf37d045')
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}/Editor/Data"
  install -d "${_dest}"
  mv "$(find "${srcdir}" -name Documentation)" "${_dest}"
}

