# Maintainer: Sam Guymer <sam at guymer dot me>

_java_ver=17
_jdkname="zulu-${_java_ver}"
_zulu_build="${_java_ver}.30.15-ca"
pkgname="${_jdkname}-bin"
pkgver="${_java_ver}.0.1"
pkgrel=1
pkgdesc='Azul Zulu builds of OpenJDK are open source, TCK-tested and certified builds of OpenJDK.'
arch=('aarch64' 'i686' 'x86_64')
url='https://www.azul.com/downloads/'
license=('custom')
depends=(
  'java-environment-common>=3'
  'java-runtime-common>=3'
  'ca-certificates-utils'
)
provides=(
  "java-environment=$_java_ver"
  "java-environment-openjdk=$_java_ver"
  "java-runtime-headless=$_java_ver"
  "java-runtime-headless-openjdk=$_java_ver"
  "java-runtime=$_java_ver"
  "java-runtime-openjdk=$_java_ver"
)
install="$pkgname.install"
source_aarch64=("https://cdn.azul.com/zulu/bin/zulu${_zulu_build}-jdk${pkgver}-linux_aarch64.tar.gz")
source_i686=("https://cdn.azul.com/zulu/bin/zulu${_zulu_build}-jdk${pkgver}-linux_i686.tar.gz")
source_x86_64=("https://cdn.azul.com/zulu/bin/zulu${_zulu_build}-jdk${pkgver}-linux_x64.tar.gz")
sha256sums_aarch64=('4d9c9116eb0cdd2d7fb220d6d27059f4bf1b7e95cc93d5512bd8ce3791af86c7')
sha256sums_i686=('31db6972e14c33f4f2136f3ea8fc016d2265d840b914bfbf6446473605aefdda')
sha256sums_x86_64=('9b8e4d1e47b02b9c2392462ee82988c189357471de3224c37173fa58e2b25112')

_jvmdir="/usr/lib/jvm/${_jdkname}"

package() {
  if [ "${CARCH}" = "aarch64" ]; then
    cd "zulu${_zulu_build}-jdk${pkgver}-linux_aarch64"
  elif [ "${CARCH}" = "i686" ]; then
    cd "zulu${_zulu_build}-jdk${pkgver}-linux_i686"
  else
    cd "zulu${_zulu_build}-jdk${pkgver}-linux_x64"
  fi

  install -dm 755 "${pkgdir}/${_jvmdir}"
  cp -a . "${pkgdir}/${_jvmdir}/"

  # based on java-openjdk package_jdk-openjdk
  # https://github.com/archlinux/svntogit-packages/blob/3f6aa8ddd98f728a9b0701288a933d16f0e8bbaf/trunk/PKGBUILD

  # Conf
  install -dm 755 "${pkgdir}/etc"
  cp -r conf "${pkgdir}/etc/${_jdkname}"
  rm -r "${pkgdir}/${_jvmdir}/conf"
  ln -s "/etc/${_jdkname}" "${pkgdir}/${_jvmdir}/conf"

  # Legal
  install -dm 755 "${pkgdir}/usr/share/licenses"
  cp -r legal "${pkgdir}/usr/share/licenses/${_jdkname}"
  rm -r "${pkgdir}/${_jvmdir}/legal"
  ln -s "/usr/share/licenses/${_jdkname}" "${pkgdir}/${_jvmdir}/legal"

  # Man pages
  for f in bin/*; do
    f=$(basename "${f}")
    _man=man/man1/"${f}.1"
    test -f "${_man}" && install -Dm 644 "${_man}" "${pkgdir}/usr/share/man/man1/${f}-${_jdkname}.1"
  done
  rm -r "${pkgdir}/${_jvmdir}/man"
  ln -s /usr/share/man "${pkgdir}/${_jvmdir}/man"

  # Link JKS keystore from ca-certificates-utils
  rm -f "${pkgdir}/${_jvmdir}/lib/security/cacerts"
  ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}/${_jvmdir}/lib/security/cacerts"
}
