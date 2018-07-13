# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.2.0
_build=f2
_buildtag=20180711
_randomstring=10189b18f56e
_prefix=/opt/Unity
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepdownloads=yes

pkgname=unity-editor-webgl
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor'
         'ffmpeg'
         'gzip')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}")
sha1sums=('a8d71b86c8a8f3bbccdf813c3bc67b3dd92c728d')
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
  extract-component WebGL

  if [ -z "${_keepdownloads}" ]; then
    rm "${startdir}/UnitySetup-WebGL-Support-for-Editor-${_version}${_build}.tar.xz"
  fi
}

