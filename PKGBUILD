# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2017.4.6
_build=f1
_buildtag=20180703
_randomstring=fbeab28dc46b
_prefix=/opt/UnityLts
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepdownloads=yes

pkgname=unity-editor-lts-mac
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Allows building your Unity projects for the Mac platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-lts')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}")
sha1sums=('85be018445e9df3ccc59733b2719eb1a8e95123b')
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
  extract-component Mac

  if [ -z "${_keepdownloads}" ]; then
    rm "${startdir}/UnitySetup-Mac-Support-for-Editor-${_version}${_build}.pkg"
  fi
}

