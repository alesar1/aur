# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_version=2018.1.5
_build=f1
_buildtag=20180621
_randomstring=2e0fa9ec2214
_prefix=/opt/Unity
_unitydownloads="http://beta.unity3d.com/download/${_randomstring}"
#_keepdownloads=yes

pkgname=unity-editor-standardassets
pkgver=${_version}${_build}+${_buildtag}
pkgrel=1
pkgdesc="Unity Standard Assets for easily getting started building projects in Unity."
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
makedepends=('gtk2' 'libsoup' 'libarchive')
source=("${_unitydownloads}/UnitySetup-${_version}${_build}")
sha1sums=('e8a2dafd1670769a85897f4addd122fa22c4019a')
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
  extract-component StandardAssets

  if [ -z "${_keepdownloads}" ]; then
    rm "${startdir}/StandardAssets.pkg"
  fi
}

