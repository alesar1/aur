# Maintainer: Oscar Morante <spacepluk at gmail dot com>

_prefix=/opt/UnityBeta

pkgname=unity-editor-beta-android
pkgver=2019.2.2f1
pkgrel=1
pkgdesc="Allows building your Unity projects for the Android platform"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-beta'
         'android-platform'
         'android-sdk-build-tools'
         'android-udev')
optdepends=('android-ndk-16b: needed for IL2CPP builds')
makedepends=('cpio')
source=("2019.2.2f1.2.2f1.pkg::https://beta.unity3d.com/download/ab112815d860/MacEditorTargetInstaller/UnitySetup-Android-Support-for-Editor-2019.2.2f1.pkg")
md5sums=("b108ff070a8d76e1802b8db6ce524945")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}/${_prefix}/Editor/Data/PlaybackEngines/AndroidPlayer"
  install -d "${_dest}"
  cd "${_dest}"
  cat "${srcdir}/TargetSupport.pkg.tmp/Payload" | gzip -dc | cpio -i
}

