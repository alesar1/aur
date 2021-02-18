# Maintainer: Yamada Hayao <development@fascode.net>

pkgname=lightdm-webkit2-theme-alter-nosplash
_pkgname=lightdm-webkit2-theme-alter
pkgver=3.0
pkgrel=3
pkgdesc="AlterLinux webkit2 greeter theme"
arch=('any')
url=https://github.com/SereneTeam/lightdm-webkit2-theme-alter
license=('MIT')
depends=('lightdm' 'lightdm-webkit2-greeter')
optdepends=()
source=("https://github.com/SereneTeam/${_pkgname}/archive/v${pkgver}.zip")
md5sums=('3bed423ff4eb7d88e4ab47b546e51f59')
conflicts=('lightdm-webkit2-theme-alter-git' 'lightdm-webkit2-theme-alter')
provides=('lightdm-webkit2-theme-alter-git' 'lightdm-webkit2-theme-alter')


remove () {
    local _list _file
    _list=($(echo "$@"))
    for _file in "${_list[@]}"; do
        if [[ -f "${_file}" ]]; then
            rm -f "${_file}"
        elif [[ -d ${_file} ]]; then
            rm -rf "${_file}"
        fi
    done
}


package () {
    mkdir -p "${pkgdir}/usr/share/lightdm-webkit/themes/alter"
    mv "${srcdir}/${_pkgname}-${pkgver}/"* "${pkgdir}/usr/share/lightdm-webkit/themes/alter"
    sudo sed -i "s/#splash-screen {/#splash-screen {\n  display: none;/" "${pkgdir}/usr/share/lightdm-webkit/themes/alter/css/splashscreen.css"
}
