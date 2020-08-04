# Contributor: Caleb Maclennan <caleb@alerque.com>
# Contributor: Jacob Mischka <jacob@mischka.me>
# Contributor: Manuel Mazzuola <origin.of@gmail.com>
# Maintainer: whezzel <whezzel at gmail dot com>

pkgname=brave-beta-bin
pkgver=1.13.59
pkgrel=1
pkgdesc='Web browser that blocks ads and trackers by default (beta binary release).'
arch=('x86_64')
url='https://brave.com/download-beta'
license=("MPL2" "BSD" "custom:chromium")
depends=('gtk3' 'nss' 'alsa-lib' 'libxss' 'ttf-font')
optdepends=('cups: Printer support'
            'libgnome-keyring: Enable GNOME keyring support'
            'pepper-flash: Adobe Flash support')
provides=("${pkgname}" 'brave-browser')
conflicts=('brave' 'brave-git' 'brave-bin' 'brave-dev-bin' 'brave-nightly-bin')
source=("${pkgname}-${pkgver}.zip::https://github.com/brave/brave-browser/releases/download/v${pkgver}/brave-v${pkgver}-linux-x64.zip"
        "LICENSE::https://raw.githubusercontent.com/brave/brave-browser/master/LICENSE"
        "${pkgname}.sh"
        "brave-browser.desktop"
        "logo.png")
options=(!strip)
sha512sums=('8210c9a54e818ea3e47a61df35a5d93dd464792f0ca8b488328faf4280a3deb51b2fbf82bf8039674f4c2a901302dbdd9e0d99d317b276a681f644ece46d698a'
            '239dbc27d68e0a03e92c68fb746602d8183084c9624a533fe92a991b8a4658d5154c901ff64826992eabcf89a5b52cb32f9cf29fd25a42bef2b5d3932010d806'
            'dee61e98ab61ebe78f3d9a55f33150efdd851644113970afada5758f2fceb3329e9f1e49438304e03358242e893ea50e0d2afb6a18dac3f4c5b26f04cf8e508c'
            '44809972e3980856494659b15d033b02c63dd1743293dc079d90d022904160532bbf82e70686dea20a46431981bf147cc5392ecc483c61378908b4a92a3d7515'
            'd7bef52e336bd908d24bf3a084a1fc480831d27a3c80af4c31872465b6a0ce39bdf298e620ae9865526c974465807559cc75610b835e60b4358f65a8a8ff159e')
noextract=("${pkgname}-${pkgver}.zip")

prepare() {
  mkdir -p brave
  cat ${pkgname}-${pkgver}.zip | bsdtar -xf- -C brave
  chmod +x brave/brave
}

_bsdtardir="brave"

package() {
    install -d -m0755 "${pkgdir}/usr/lib"
    cp -a --reflink=auto ${_bsdtardir} "${pkgdir}/usr/lib/${pkgname}"

    install -Dm0755 "${pkgname}.sh" "${pkgdir}/usr/bin/brave-beta"
    install -Dm0644 -t "${pkgdir}/usr/share/applications" "brave-browser.desktop"
    install -Dm0644 "logo.png" "${pkgdir}/usr/share/pixmaps/brave-beta.png"
    install -Dm0664 -t "${pkgdir}/usr/share/licenses/${pkgname}" "LICENSE"
    ln -s /usr/lib/PepperFlash "${pkgdir}/usr/lib/pepperflashplugin-nonfree"
}
