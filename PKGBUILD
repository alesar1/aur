# Maintainer: Roshless <pkgs@roshless.com>

pkgname='netbox'
pkgver=3.1.1
pkgrel=3
pkgdesc='IP address management (IPAM) and data center infrastructure management (DCIM) tool.'
arch=('any')
url='https://github.com/digitalocean/netbox'
license=('Apache')
depends=(
	'gunicorn'
	'python-graphene-django'
	'python-django'
	'python-django-cacheops'
	'python-django-cors-headers'
	'python-django-debug-toolbar'
	'python-django-filter'
	'python-django-graphiql-debug-toolbar'
	'python-django-mptt'
	'python-django-pglocks'
	'python-django-prometheus'
	'python-django-rq'
	'python-django-tables2'
	'python-django-taggit'
	'python-django-timezone-field'
	'python-django-rest-framework'
	'python-drf-yasg'
	'python-jinja'
	'python-markdown'
	'python-netaddr'
	'python-pillow'
	'python-psycopg2'
	'python-pycryptodome'
	'python-pyaml'
	'python-redis'
	'python-social-auth-app-django'
	'python-svgwrite'
	'python-text-unidecode'
)
install="$pkgname.install"
conflicts=("$pkgname-git")
replaces=("$pkgname-git")
source=("https://github.com/digitalocean/netbox/archive/v$pkgver.tar.gz"
	"$pkgname.service"
	"$pkgname-rq.service"
	"$pkgname.sysusers"
	"$pkgname.tmpfile"
	"upgrade.sh")
backup=('etc/netbox/configuration.py')

package() {
	#install -dm775 "$pkgdir/etc/$pkgname"
	install -d "$pkgdir/var/lib/"$pkgname
	cp -r $pkgname-$pkgver/$pkgname/. "$pkgdir/var/lib/$pkgname"

	install -Dm644 $pkgname.service "$pkgdir/usr/lib/systemd/system/$pkgname.service"
	install -Dm644 $pkgname-rq.service "$pkgdir/usr/lib/systemd/system/$pkgname-rq.service"
	install -Dm644 $pkgname.tmpfile "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
	install -Dm644 $pkgname.sysusers "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

	install -d "$pkgdir/etc/$pkgname"
	install -D -m644 $pkgname-$pkgver/$pkgname/$pkgname/configuration.example.py "$pkgdir/etc/netbox/configuration.py.new"
	install -D -m755 upgrade.sh "$pkgdir/etc/netbox/upgrade.sh"
	ln -s "/etc/netbox/configuration.py" "$pkgdir/var/lib/netbox/netbox/configuration.py"
}

md5sums=('e514f7ec788b6c81825b60082b949a22'
         '55dcba60ed4cb66b350d3d8f2946aef9'
         'ad07c0c741a231b8d8012221bee2c167'
         'b653f7da646e78ad5c69d3960bbafd9c'
         '451d167d2f3ae189f62b44ad1feb6da1'
         '97c618de19719135aa84458789b025b1')
