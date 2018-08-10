# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.2.2
_build=f1
_buildtag=20180703
_randomstring=fcee59332301
_prefix=/opt/Unity
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepsources=yes

pkgname=unity-editor-doc
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Unity User Manual and Scripting API Reference."
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}")
sha1sums=('612f9e45bd05ba2dc9c5c6d5afab8a3b2c0c2958')
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
  extract-component Documentation

  if [ -z "${_keepsources}" ]; then
    rm "${startdir}/Documentation.pkg"
  fi
}

