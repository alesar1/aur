# Maintainer: napaalm <nap@napaalm.xyz>
# adapted from package: pianoteq-stage
# adapted from pkgbuild creator: spider-mario <spidermario@free.fr> 


pkgname=pianoteq
pkgver=7.5.4
pkgrel=1
pkgdesc="Virtual piano instrument using physical modelling synthesis. Both standalone and plugin versions."
arch=('x86_64')
url="https://www.pianoteq.com/pianoteq"
license=('custom')
depends=('alsa-lib' 'freetype2' 'ttf-font' 'libxext')
makedepends=('gendesk' 'wget' 'p7zip')
optdepends=()
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}" "pianoteq-stage" "pianoteq-standard-trial-bin")
# the source package must be downloaded manually
# this can be done by going to the link here:
# https://www.modartt.com/download?file=pianoteq_linux_v754.7z
source=("local://pianoteq_linux_v${pkgver//./}.7z"
        'https://www.pianoteq.com/images/logo/pianoteq_icon_128.png')
b2sums=('2809f79b656e287591f749b56c769031f183d9383ba16cc0daae8452b98a84bae38afd2b6f77c3886494211e12d035042385ea4c165adc24517cfcabcd08ec86'
        'bbb48b5b2bd5bbe52a39c84f42ea6c12a3633e4713e00d8132654ddf5adc5d7da1b7951c683cb11446ee847a388a775eb48591089a4e8dc69ed6d97cfc80d56d')

prepare(){
	gendesk -f -n --pkgname "$pkgname" --pkgdesc "$pkgdesc" --name='pianoteq 7' --exec='"pianoteq 7"' --categories 'Audio;Sequencer;Midi;AudioVideoEditing;Music;AudioVideo;'
}

package(){
	_pianoteq_type="Pianoteq 7"
	archdir="x86-64bit" # i686 is no longer supported
	# Install program files:
	install -Dm 755 "$srcdir/$_pianoteq_type/$archdir/$_pianoteq_type" "$pkgdir/usr/bin/pianoteq 7"
	install -Dm 755 "$srcdir/$_pianoteq_type/$archdir/$_pianoteq_type.so" "$pkgdir/usr/lib/vst/pianoteq 7.so"
	cd "$srcdir/$_pianoteq_type/$archdir/$_pianoteq_type.lv2"
	for i in *; do
		install -D "$i" "$pkgdir/usr/lib/lv2/Pianoteq 7.lv2/$i"
	done
	cd $srcdir
	# Install desktop launcher:
	install -Dm 644 "$srcdir/pianoteq_icon_128.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
	install -Dm 644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/${pkgname%-*}.desktop"
	# Install the license:
	install -d "$pkgdir/usr/share/licenses/$pkgname"
	ls -a
	install -m 644 "$_pianoteq_type"/*Licence* "$pkgdir/usr/share/licenses/$pkgname/"
	# Install the Documentation:
	install -D "$_pianoteq_type/README_LINUX.txt" "$pkgdir/usr/share/doc/${pkgname%-*}/README_LINUX.txt"
	cd "$srcdir/$_pianoteq_type/Documentation"
	for i in *; do
		install -D "$i" "$pkgdir/usr/share/doc/${pkgname%-*}/$i"
	done
}
