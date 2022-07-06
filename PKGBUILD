# Maintainer: Mathias Merscher <archlinux@rheinekopfsache.de>
# Maintainer: Yoan Blanc <yoan@dosimple.ch>

pkgname=tfsec-bin
pkgver=1.26.2
pkgrel=1
pkgdesc="Static analysis powered security scanner for your terraform code"
depends=(glibc)
arch=('aarch64' 'x86_64')
provides=('tfsec')
conflicts=('tfsec')
url="https://github.com/aquasecurity/tfsec"
license=('MIT')

source_aarch64=("tfsec-${pkgver}-${pkgrel}_aarch64::${url}/releases/download/v${pkgver}/tfsec-linux-arm64"
                "tfsec-${pkgver}-${pkgrel}_aarch64.asc::${url}/releases/download/v${pkgver}/tfsec-linux-arm64.D66B222A3EA4C25D5D1A097FC34ACEFB46EC39CE.sig"
                "https://raw.githubusercontent.com/tfsec/tfsec/v${pkgver}/LICENSE")
source_x86_64=("tfsec-${pkgver}-${pkgrel}_x86_64::${url}/releases/download/v${pkgver}/tfsec-linux-amd64"
               "tfsec-${pkgver}-${pkgrel}_x86_64.asc::${url}/releases/download/v${pkgver}/tfsec-linux-amd64.D66B222A3EA4C25D5D1A097FC34ACEFB46EC39CE.sig"
               "https://raw.githubusercontent.com/tfsec/tfsec/v${pkgver}/LICENSE")

sha256sums_aarch64=('e69bfa5e99584172f3e24f3b2bd6fcd13bae4d70e8b7e5d21168ed123fb8b339'
                    'SKIP'
                    'd59c7e06f84530a8464a352e7b7e153830d566e06aa8ca6a72defa809fad3a37')
sha256sums_x86_64=('f02c75262b6af564941d1fe0b51d0aabadcf3458368559288f1c70fc9a8d02c1'
                   'SKIP'
                   'd59c7e06f84530a8464a352e7b7e153830d566e06aa8ca6a72defa809fad3a37')

validpgpkeys=('D66B222A3EA4C25D5D1A097FC34ACEFB46EC39CE')

package() {
    install -D -m755 "${srcdir}/tfsec-${pkgver}-${pkgrel}_${CARCH}" "${pkgdir}/usr/bin/tfsec"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
