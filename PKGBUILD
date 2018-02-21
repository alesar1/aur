# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.1.0
_build=b8
_buildtag=20180221
_randomstring=ee2fb9f9da52
_prefix=/opt/UnityBeta
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepdownloads=yes

pkgname=unity-editor-beta-windows
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Allows building your Unity projects for the Windows platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-beta')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}")
sha1sums=('1322e5922b3a5b37910b30e308740cc453211ebd')
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

package_unity-editor-beta-windows() {
  mkdir -p "${pkgdir}${_prefix}"
  extract-component Windows-Mono

  if [ -z "${_keepdownloads}" ]; then
    rm "${startdir}/UnitySetup-Windows-Mono-Support-for-Editor-${_version}${_build}.pkg"
  fi
}

