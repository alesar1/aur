# Maintainer: nissen22
_pkgname=joycond-cemuhook
pkgname=${_pkgname}-git
pkgver=r26.e51f79c
pkgrel=1
pkgdesc="Support for cemuhook's UDP protocol for joycond devices"
arch=("any")
url="https://github.com/joaorb64/joycond-cemuhook"
license=("unknown")

depends=("hid-nintendo-dkms" "joycond-git" "python")
makedepends=()
conflicts=("${_pkgname}")

source=("${_pkgname}::git+https://github.com/joaorb64/${_pkgname}.git")
sha512sums=('SKIP')


pkgver() {
  cd "${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    pwd
    install -Dm755 "../run.sh" "${pkgdir}/usr/bin/${pkgname}"
    cd "${_pkgname}"

    
    install -Dm644 "joycond-cemuhook.py" "${pkgdir}/usr/lib/${pkgname}/${pkgname}.py"
    
    install -Dm644 "Nintendo Switch Combined Joy-Cons.json" "${pkgdir}/usr/lib/${pkgname}/Nintendo Switch Combined Joy-Cons.json"
    install -Dm644 "Nintendo Switch Left Joy-Con.json" "${pkgdir}/usr/lib/${pkgname}/Nintendo Switch Left Joy-Con.json"
    install -Dm644 "Nintendo Switch Pro Controller.json" "${pkgdir}/usr/lib/${pkgname}/Nintendo Switch Pro Controller.json"
    install -Dm644 "Nintendo Switch Right Joy-Con.json" "${pkgdir}/usr/lib/${pkgname}/Nintendo Switch Right Joy-Con.json"    

    
    
    install -Dm644 "README.rst" "${pkgdir}/usr/share/doc/${_pkgname}/README.md"
}
