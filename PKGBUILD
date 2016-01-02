# Maintainer: boltbuckle <amygdala@cheerful.com>
# Contributor: Christopher Arndt <chris@chrisarndt.de>

pkgname=tracktion-6
pkgver=6.3.0
pkgrel=1
pkgdesc="Commercial Proprietary Music Production Software"
arch=('x86_64')
url="http://www.tracktion.com/"
license=('custom')
depends=('alsa-lib' 'mesa' 'desktop-file-utils' 'shared-mime-info' )
optdepends=(
	'jack: A low-latency audio server'
	'ladspa-plugins: a set of ladspa plugins'
	)
conflicts=()
source=(
	"https://s3-us-west-2.amazonaws.com/tracktion-marketplace-public/TracktionInstall_6_Linux_64Bit_latest.deb"
	'license' 
	'Tracktion6.desktop'
	)
install="tracktion.install"
md5sums=('bdbc41e8e849460f799e5328ec3799d6'
         'd7bac73a1a52d26b337761a1d7ec561d'
         '5f3f8df1af8260db42a1ab4cc313d75a')

package() {
	tar -x --lzma -f data.tar.lzma -C "${pkgdir}"
	rm "$pkgdir/usr/share/applications/tracktion6.desktop"
	install -Dm644 "$startdir/license" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 "$startdir/Tracktion6.desktop" "$pkgdir/usr/share/applications/"

        msg "---||-------------------------------------------------||"
        msg "---|| All fine and dandy...                           ||"
        msg "---|| Tracktion is no longer free nor open source     ||"
        msg "---|| and in demo mode.                               ||"
        msg "---||                                                 ||"
        msg "---|| As of v6.1 Tracktion for Linux is considered    ||"
        msg "---|| production-ready and licenses now need to be    ||"
        msg "---|| purchased for new installs.                     ||"
        msg "---||                                                 ||"
        msg "---|| If you obtained a free license for T6.0 it      ||"
        msg "---|| should continue to work on the machine you      ||"
        msg "---|| registered it on for the lifetime of the T6     ||"
        msg "---|| series                                          ||"
        msg "---||                                                 ||"
        msg "---|| Alternatively try out an older version          ||"
        msg "---|| Tracktion-4-Free at AUR                         ||"
        msg "---||                                                 ||"
        msg "---|| Visit www.tracktion.com for more info           ||"
        msg "---||-------------------------------------------------||"
        }
