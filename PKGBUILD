# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/Unity

pkgname=unity-editor-webgl
pkgver=2019.2.9f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor'
         'ffmpeg'
         'gzip'
         'ncurses5-compat-libs')
source=("2019.2.9f1.2.9f1.tar.xz::https://download.unity3d.com/download_unity/ebce4d76e6e8/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2019.2.9f1.tar.xz")
md5sums=("edb73b44a0893dc6e8c26d9dda3e68c6")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}

