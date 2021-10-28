# Maintainer: RichieMay

pkgname=intellij-idea-ultimate-with-jbr
pkgver=2021.2.3
pkgrel=1
pkgdesc="Intellij Idea Ultimate"
arch=(x86_64)
options=(!strip)
url='https://www.jetbrains.com/idea/'
license=('GPL3')
conflicts=('intellij-idea-ultimate-without-jbr' 'intellij-idea-ultimate-edition' 'intellij-idea-ultimate-edition-jre')

source=(
    # The download url
    "ideaIU-${pkgver}.tar.gz::https://download.jetbrains.com/idea/ideaIU-${pkgver}.tar.gz"
    "intellij-idea-ultimate.desktop")

sha256sums=(
    # https://download.jetbrains.com/idea/ideaIU-${pkgver}.tar.gz.sha256
    '16929fd22b84b400d0b9e24fd356dd2e7a614511a2d779ee37082c90df179c25'
    'a8a31e45e8abed10f71c3e948064fe7258dc9cb3d60d6f48de7b009b05625f88')


package() {
    _host_install_dir="/opt/$pkgname"
    _pkg_install_dir="${pkgdir}${_host_install_dir}"
    _pkg_bin_dir="$pkgdir/usr/bin"
    _pkg_png_dir="$pkgdir/usr/share/icons/hicolor/128x128/apps"
    _pkg_svg_dir="$pkgdir/usr/share/icons/hicolor/scalable/apps"
    _pkg_desktop_dir="$pkgdir/usr/share/applications"

    install -d "$_pkg_install_dir" "$_pkg_bin_dir" "$_pkg_png_dir" "$_pkg_svg_dir" "$_pkg_desktop_dir"

    cp -r idea-IU-*/* "$_pkg_install_dir"
    ln -s "$_host_install_dir/bin/idea.sh" "$_pkg_bin_dir/idea"
    ln -s "$_host_install_dir/bin/idea.png" "$_pkg_png_dir/idea.png"
    ln -s "$_host_install_dir/bin/idea.svg" "$_pkg_svg_dir/idea.svg"
    cp "$srcdir/intellij-idea-ultimate.desktop" "$_pkg_desktop_dir"
}
