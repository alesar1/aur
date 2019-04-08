# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_prefix=/opt/UnityBeta

pkgname=unity-editor-beta-webgl
pkgver=2019.1.0b10
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-beta'
         'ffmpeg'
         'gzip'
         'ncurses5-compat-libs')
source=("2019.1.0b10.1.0b10.tar.xz::https://beta.unity3d.com/download/dbf1e96a8b63/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2019.1.0b10.tar.xz")
md5sums=("7aa9c1c030fb6762d61d26aa1b16421b")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}

