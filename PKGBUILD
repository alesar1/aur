# Maintainer: Sefa Eyeoglu <contact@scrumplex.net>

_pkgname=nfancurve
pkgname=${_pkgname}
pkgver=017
pkgrel=1
pkgdesc="A small and lightweight Bash script for using a custom fan curve in Linux for NVIDIA GPUs"
arch=("any")

url="https://github.com/nan0s7/nfancurve"
license=("GPL3")

depends=("bash" "nvidia" "nvidia-settings" "procps")
conflicts=("${_pkgname}-git")

install=${_pkgname}.install

source=(
    "${_pkgname}-${pkgver}::https://github.com/nan0s7/${_pkgname}/archive/v${pkgver}.tar.gz"
)
sha512sums=(
    "372f5dd5b1b0dd20d5483d89fdc380e9cdb51a4b69361712e7b9019c9f46e8575c3ba87221bcce3187244285523fd51a43420f492ea3c1285a42ee12d6263a59"
)

package() {
    cd "${_pkgname}-${pkgver}"

    install -m755 -D "temp.sh" "$pkgdir/usr/bin/nfancurve"
    install -m644 -D "config" "$pkgdir/usr/share/doc/${_pkgname}/config.example"
}
