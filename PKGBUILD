# Maintainer: John Ramsden <johnramsden [at] riseup [dot] net>

pkgname=zrepl-bin
_pkgname=zrepl
pkgver=0.3.0
pkgrel=2
pkgdesc='One-stop ZFS backup & replication solution'
arch=('x86_64')
url='https://zrepl.github.io/'
license=('MIT')
provides=('zrepl')
conflicts=('zrepl')
source=(
    ${_pkgname}-${pkgver}::"https://github.com/${_pkgname}/${_pkgname}/archive/v${pkgver}.tar.gz"
    ${_pkgname}-bin::"https://github.com/${_pkgname}/${_pkgname}/releases/download/v${pkgver}/${_pkgname}-linux-amd64"
)
sha256sums=('669b59ca524f487a76145f7153b9c048442cd1b96a293e0dc18048f5024a2997'
            'a87115fbd8ee802c71e3f279696ac27822eca488477705a70fc397aee985da3e')

package() {
    install -d "${pkgdir}/usr/share/licenses/${_pkgname}"
    install -d "${pkgdir}/usr/share/${_pkgname}"
    install -d "${pkgdir}/usr/lib/systemd/system"
    install -d "${pkgdir}/usr/bin"
    install -d "${pkgdir}/usr/share/bash-completion/completions"
    install -d "${pkgdir}/usr/share/zsh/site-functions"

    install -m644 "${_pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
    install -m644 "${_pkgname}-${pkgver}/dist/systemd/${_pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
    install -m755 "${_pkgname}-bin" "${pkgdir}/usr/bin/${_pkgname}"
    cp -r "${_pkgname}-${pkgver}/config/samples" "${pkgdir}/usr/share/${_pkgname}/samples"

    "${pkgdir}/usr/bin/${_pkgname}" gencompletion zsh "${pkgdir}/usr/share/zsh/site-functions/_zrepl"
    "${pkgdir}/usr/bin/${_pkgname}" gencompletion bash "${pkgdir}/usr/share/bash-completion/completions/zrepl"

    sed -i s:/usr/local/bin/:/usr/bin/:g "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
}
