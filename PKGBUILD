# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/Unity

pkgname=unity-editor-webgl
pkgver=2018.3.9f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor'
         'ffmpeg'
         'gzip'
         'ncurses5-compat-libs')
source=("2018.3.9f1.3.9f1.tar.xz::https://download.unity3d.com/download_unity/947e1ea5aa8d/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2018.3.9f1.tar.xz")
md5sums=("7d70e3191218f18e0511e9494c078210")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}

