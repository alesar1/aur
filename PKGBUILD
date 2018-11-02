# Maintainer: SanskritFritz (gmail)

_pkgname=timekpr-revived
pkgname=$_pkgname-bzr
pkgver=12
pkgrel=2
pkgdesc="Control the computer usage of users. You can limit daily usage based on a timed access duration and configure periods of day when they can log in."
arch=('any')
url='https://launchpad.net/timekpr-revived'
license=('GPL')
depends=('python2-libappindicator' 'python2-notify' 'polkit' 'libglade' 'python2-dbus' 'python2-gobject')
optdepends=('lxqt-policykit: to start the Control Panel like in LXQT'
            'mate-polkit: to start the Control Panel like in Mate'
            'polkit-kde-agent: to start the Control Panel like in Plasma'
            'polkit-gnome: to start the Control Panel like in Gnome (legacy)'
            'xfce-polkit: to start the Control Panel like in XFCE')
makedepends=('bzr')
provides=('timekpr')
conflicts=('timekpr')
source=("$_pkgname::bzr+http://bazaar.launchpad.net/~mjasnik/timekpr-revived/stable"
        "timekpr.service")
backup=('etc/timekpr.conf')
install='timekpr-revived.install'
md5sums=('SKIP'
         '190ba51a3f50f2dca4d2adef359d741b')

pkgver() {
	cd "$_pkgname"
	printf "%s" "$(bzr revno)"
}

package() {
	cd "$srcdir/$_pkgname/"

# 	./install.sh "$pkgdir"

	cat debian/install | while read a b; do
		f=`basename "$a"`
		if [ -d $a ]; then
			install -d "$pkgdir/$b/$f"
		else
			install -D "$a" "$pkgdir/$b/$f"
		fi
	done
	install -m755 debian/timekpr.postrm "$pkgdir"/usr/bin/timekpr.postrm
	install -m755 debian/timekpr.postinst "$pkgdir"/usr/bin/timekpr.postinst
	install -Dm0644 "$srcdir"/timekpr.service "$pkgdir"/usr/lib/systemd/system/timekpr.service

}
