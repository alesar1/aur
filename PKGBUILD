# Contributor: Rizwan Hasan <rizwan.hasan486@gmail.com>

pkgname=marwaita-icon-theme
pkgver=1.0
pkgrel=2
pkgdesc="Marwaita icons for ArchLinux"
arch=('any')
url='https://www.gnome-look.org/p/1258318/'
license=('custom')
source=(marwaita-icon-theme.zip::"https://www.gnome-look.org/p/1258318/startdownload?file_id=1538249991&file_name=Marwaita%20Icons.zip&file_type=application/zip&file_size=27170193&url=https%3A%2F%2Fdl.opendesktop.org%2Fapi%2Ffiles%2Fdownload%2Fid%2F1538249991%2Fs%2F1f2e18f13e5644ebc5a914c6ea9bb378%2Ft%2F1540028118%2Fu%2F%2FMarwaita%20Icons.zip")
md5sums=('09ff80a185e6e09e3f1b45742de2f806')

package() {
    cd ${srcdir}
    install -dm 755 ${pkgdir}/usr/share/icons
    cp -avr * ${pkgdir}/usr/share/icons/
}
