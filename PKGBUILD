# Maintainer: Hai Zhang <dreaming.in.code.zh@gmail.com>

pkgname=android-sdk-cmdline-tools-latest
pkgver=1.0
pkgrel=1
pkgdesc='Android SDK Command-line Tools (latest)'
arch=('x86_64' 'i686')
url='https://developer.android.com/studio'
license=('custom')
depends=('glibc' 'java-environment')
optdepends=('android-sdk-platform-tools: adb, aapt, aidl, dexdump and dx'
            'android-udev: udev rules for Android devices')
provides=('android-sdk')
install="${pkgname}.install"
source=('https://dl.google.com/android/repository/commandlinetools-linux-6200805_latest.zip'
        "${pkgname}.sh"
        "${pkgname}.csh")
sha1sums=('6ffc5bd72db2c755f9b374ed829202262a6d8aaf'
          'd16076f0a7cbc78605b5669d0928963a9866e7f4'
          '3e844b22bfcbc159280c5f9e8dfb07ff9559dde5')

package() {
  mkdir -p "${pkgdir}/opt/android-sdk/cmdline-tools/"
  cp -a 'tools' "${pkgdir}/opt/android-sdk/cmdline-tools/latest"
  install -Dm755 "${pkgname}.sh" "${pkgdir}/etc/profile.d/${pkgname}.sh"
  install -Dm755 "${pkgname}.csh" "${pkgdir}/etc/profile.d/${pkgname}.csh"
}
