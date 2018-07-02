# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.1.6
_build=f1
_buildtag=20180702
_randomstring=a68afd074ea7
_prefix=/opt/Unity
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepdownloads=yes

pkgname=unity-editor-ios
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Allows building your Unity projects for the iOS platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}")
sha1sums=('c2f93a1e33c591b742ec20006e1c622ef6d9b67b')
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

unity-setup() {
  ./UnitySetup-${_version}${_build} \
    --download-location="${startdir}" \
    --install-location="${pkgdir}${_prefix}" \
    --unattended $@
}

extract-component() {
  msg2 "Extracting $1..."
  yes | unity-setup --components=$1 > "/tmp/$1.log"
}

prepare() {
  chmod +x "${srcdir}/UnitySetup-${_version}${_build}"
}

package() {
  mkdir -p "${pkgdir}${_prefix}"
  extract-component iOS

  if [ -z "${_keepdownloads}" ]; then
    rm "${startdir}/UnitySetup-iOS-Support-for-Editor-${_version}${_build}.tar.xz"
  fi
}

