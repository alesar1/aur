pkgname=jdk8-j9-bin
_pkgver='8.0-5.7'
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="IBM® SDK, Java Technology Edition, Version 8"
arch=('x86_64')
url="https://developer.ibm.com/javasdk/downloads/sdk8/"
license=('custom')
depends=('java-environment-common' 'ca-certificates-utils' 'nss')
provides=(
'java-environment=8'
'java-runtime=8'
'java-runtime-headless=8'
)
makedepends=('coreutils' 'bash')
source=("install_${pkgver}.bin::https://public.dhe.ibm.com/ibmdl/export/pub/systems/cloud/runtimes/java/${pkgver}/linux/x86_64/ibm-java-sdk-${_pkgver}-x86_64-archive.bin")
sha256sums=('022bd2f108dd63fbaf2259bd4dfc2bc97ca4854f5912f663feace22a504dece3')

package() {
	cd "$srcdir"
    chmod +x install_${pkgver}.bin
    mkdir -p "${pkgdir}/usr/lib/jvm/java-8-j9"
    ./install_${pkgver}.bin -i silent -DLICENSE_ACCEPTED=TRUE -DUSER_INSTALL_DIR="${pkgdir}/usr/lib/jvm/java-8-j9"
    mkdir -p "${pkgdir}/usr/share/licenses"
    ln -s ../../lib/jvm/java-8-j9/license_en.txt "${pkgdir}/usr/share/licenses/jdk8-j9"
}

