# Maintainer: Shayne Hartford <shayneehartford@gmail.com>

pkgbase=chromeos-kde-git
pkgname=(chromeos-kde-git kvantum-theme-chromeos-git)
_pkgname=chromeos-kde
pkgver=r16.0f25681
pkgrel=1
pkgdesc="ChromeOS theme for kde plasma"
arch=(any)
url="https://github.com/vinceliuice/$_pkgname"
license=('GPL3')
options=('!strip')
source=("git+$url.git")
sha256sums=('SKIP')
makedepends=('git')

pkgver() {
  cd "$srcdir/$_pkgname"
  
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package_chromeos-kde-git() {
    provides=('chromeos-kde')
    optdepends=('chromeos-gtk-theme: Matching GTK theme'
                'kvantum-theme-chromeos: ChromeOS theme for Kvantum Qt style (recommended)'
                'tela-icon-theme: Matching icon theme')

    cd $_pkgname

    install -d "$pkgdir"/usr/share
    
    rm sddm/{README.md,install.sh}
    
    # Temporary fix for upstream filestructure
    mv aurorae themes
    mkdir -p aurorae
    mv themes aurorae/

    cp -r aurorae "$pkgdir"/usr/share
    cp -r color-schemes "$pkgdir"/usr/share
    cp -r plasma "$pkgdir"/usr/share
    cp -r sddm "$pkgdir"/usr/share
}

package_kvantum-theme-chromeos-git() {
    provides=('kvantum-theme-chromeos')
    pkgdesc="ChromeOS theme for KDE Plasma 5"
    depends=(kvantum-qt5)

    cd $_pkgname

    install -d "$pkgdir"/usr/share

    cp -r Kvantum "$pkgdir"/usr/share
}
