# Maintainer: Davide Depau <davide@depau.eu>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=jdk11-openj9-bin
_jdkver=11
_openj9ver=0.15.1
_majorver=${_jdkver}.0.4
_buildvershort=11
_buildver=${_buildvershort}_openj9-${_openj9ver}
pkgver=${_majorver}b${_buildver//-/_}
pkgrel=2
pkgdesc="Eclipse (former IBM) OpenJ9 with openjdk${_jdkver}"
arch=('x86_64')
url="https://adoptopenjdk.net/index.html?variant=openjdk${_jdkver}&jvmVariant=openj9"
license=('GPL2')
depends=('java-environment-common' 'ca-certificates-utils' 'nss')
provides=(
  "java-environment=${_jdkver}"
  "java-environment-openjdk=${_jdkver}"
  "java-runtime=${_jdkver}"
  "java-runtime-openjdk=${_jdkver}"
  "java-runtime-headless=${_jdkver}"
  "java-runtime-headless-openjdk=${_jdkver}"
)
options=(!strip)
source=("https://github.com/AdoptOpenJDK/openjdk${_jdkver}-binaries/releases/download/jdk-${_majorver}%2B${_buildver}/OpenJDK${_jdkver}U-jdk_x64_linux_openj9_${_majorver}_${_buildver}.tar.gz")
sha256sums=('b1099cccc80a3f434728c9bc3b8a90395793b625f4680ca05267cf635143d64d')

_jvmdir=usr/lib/jvm/java-${_jdkver}-j9

package() {
  # Install
  install -d "${pkgdir}/${_jvmdir}"
  cd jdk-${_majorver}+${_buildvershort}
  cp -a bin demo include jmods lib release "${pkgdir}/${_jvmdir}/"
  # Link JKS keystore from ca-certificates-utils
  rm -f "${pkgdir}/${_jvmdir}/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}/${_jvmdir}/lib/security/cacerts"
  # Legal
  install -d "${pkgdir}/usr/share/licenses/java${_jdkver}-j9"
  cp -a legal "${pkgdir}/usr/share/licenses/java${_jdkver}-j9/"
  ln -s /usr/share/licenses/java${_jdkver}-j9 "${pkgdir}/${_jvmdir}/legal"
  # Conf
  install -d "${pkgdir}/etc"
  cp -r conf "${pkgdir}/etc/java${_jdkver}-j9"
  ln -s /etc/java${_jdkver}-j9 "${pkgdir}/${_jvmdir}/conf"
  # Man pages
  for f in man/man1/*; do
    install -Dm 644 "${f}" "${pkgdir}/usr/share/${f/\.1/-openjdk11-j9.1}"
  done
  ln -s /usr/share/man "${pkgdir}/${_jvmdir}/man"
}
# vim:set ts=2 sw=2 et:
