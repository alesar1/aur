# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/Unity

pkgname=unity-editor-webgl
pkgver=2018.3.10f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the WebGL platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor'
         'ffmpeg'
         'gzip'
         'ncurses5-compat-libs')
source=("2018.3.10f1.3.10f1.tar.xz::https://download.unity3d.com/download_unity/f88de2c96e63/LinuxEditorTargetInstaller/UnitySetup-WebGL-Support-for-Editor-2018.3.10f1.tar.xz")
md5sums=("fcefa8d5bd9258828be4a1b21cf2fdee")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}"
  install -d "${_dest}"
  mv Editor "${_dest}"
}

