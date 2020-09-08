# Maintainer: Skydrome <skydrome at protonmail dot com>

pkgname=zulu-embedded-jdk11
pkgver=13.0.4
pkgrel=1
pkgdesc='Zulu Embedded is a certified build of OpenJDK for Armv8/v7/v6 devices.'
arch=('armv6h' 'armv7h' 'armv8h' 'i686' 'x86_64')
url='https://www.azul.com/downloads/zulu-community'
license=('custom')
install=jdk.install
options=(!strip)
provides=("java-environment=11" "java-runtime=11")
depends=('java-runtime-common>=3' 'java-environment-common>=3'
         'ca-certificates-utils' 'nss' 'libjpeg-turbo' 'lcms2' 'libnet'
         'freetype2' 'giflib' 'libelf')

#CARCH=armv7h

case "$CARCH" in
    armv?h) _arch='aarch32hf'
        _build=13.33.38
        sha256sums=('9b8bfb5b60bd93a1c724834a805c2e81897bb58b54c89ce0f45712940444e720')
        source=("https://cdn.azul.com/zulu-embedded/bin/zulu${_build}-ca-jdk${pkgver}-c2-linux_${_arch}.tar.gz")
        ;;
    aarch64) _arch='aarch64'
        _build=13.33.38
        pkgver=13.0.4
        sha256sums=('7ee9c5452e4af1cd48abd9aff25f243feee9fba90ce86fc555570693ea4bd42c')
        provides=("java-environment=13" "java-runtime=13")
        ;;
    i686) _arch='i686'
        _build=14.29.23
        pkgver=14.0.2
        sha256sums=('e1111709c5fb1ecabff8080f7974ffba0b782246a77272f2fcbedd2d15adee45')
        source=("https://cdn.azul.com/zulu/bin/zulu${_build}-ca-jdk${pkgver}-linux_i686.tar.gz")
        provides=("java-environment=14" "java-runtime=14")
        ;;
    x86_64) _arch='x64'
        _build=14.29.23
        pkgver=14.0.2
        sha256sums=('7f4310a98ea0e52bacbec389012d859dbb51e759fe35a2cfebb11300271872d2')
        source=("https://cdn.azul.com/zulu/bin/zulu${_build}-ca-jdk${pkgver}-linux_x64.tar.gz")
        provides=("java-environment=14" "java-runtime=14")
        ;;
esac

_archive="zulu${_build}-ca-jdk${pkgver}-linux_${_arch}"
source=(${source:-"http://cdn.azul.com/zulu-embedded/bin/${_archive}.tar.gz"})

_jvmdir="usr/lib/jvm/zulu-embedded-${pkgver%%.*}"

package() {
    cd "$_archive"

    install -dm 755 "${pkgdir}/${_jvmdir}"
    cp -a . "${pkgdir}/${_jvmdir}/"

    # Conf
    install -dm 755 "${pkgdir}/etc"
    cp -r conf "${pkgdir}/etc/${pkgname}"
    rm -rf "${pkgdir}/${_jvmdir}/conf"
    ln -s "/etc/${pkgname}" "${pkgdir}/${_jvmdir}/conf"

    # Legal
    install -dm 755 "${pkgdir}/usr/share/licenses"
    cp -r legal "${pkgdir}/usr/share/licenses/${pkgname}"
    rm -rf "${pkgdir}/${_jvmdir}/legal"
    ln -s "/usr/share/licenses/${pkgname}" "${pkgdir}/${_jvmdir}/legal"

    # Man pages
    for f in man/man1/*; do
      install -Dm 644 "${f}" "${pkgdir}/usr/share/${f/\.1/-zulu.1}"
    done
    rm -rf "${pkgdir}/${_jvmdir}/man"
    ln -s /usr/share/man "${pkgdir}/${_jvmdir}/man"

    # Link JKS keystore from ca-certificates-utils
    rm -f "${pkgdir}/${_jvmdir}/lib/security/cacerts"
    ln -sf /etc/ssl/certs/java/cacerts "${pkgdir}/${_jvmdir}/lib/security/cacerts"
}
