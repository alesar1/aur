# Maintainer: Anthony Ruhier <anthony.ruhier@gmail.com>

_name=netbox
pkgname=${_name}
pkgver=1.9.2
pkgrel=1
pkgdesc="IP address management (IPAM) and data center infrastructure management (DCIM) tool."
arch=('any')
url="https://github.com/digitalocean/${_name}"
license=('Apache-2.0')
depends=('python'
         'gunicorn'
         'libffi'
         'libpgf'
         'openssl'
         'python-crypto'
         'python-cryptography'
         'python-django'
         'python-django-debug-toolbar-git'
         'python-django-filter'
         'python-django-mptt'
         'python-django-rest-framework'
         'python-django-rest-swagger0.3.10'
         'python-django-tables2'
         'python-graphviz'
         'python-lxml'
         'python-markdown'
         'python-natsort'
         'python-ncclient'
         'python-netaddr'
         'python-paramiko'
         'python-py-gfm'
         'python-psycopg2'
         'python-sqlparse'
         'python-xmltodict'
				 'python-yaml')

conflicts=("${_name}-git")
replaces=("${_name}-git")
install="${_name}.install"
source=("${url}/archive/v${pkgver}.tar.gz"
        "${_name}-system.service"
        "${_name}.tmpfile"
				"debug_toolbar_middleware.patch"
				"gunicorn_config.py")
sha256sums=('1519d70bff1e5ef97cd6eadce97a4083c8d6cfe7b747c7be5705a226f532ecf2'
            'dc83de37ff9151de3d309fd43c6eff3b30886882012b81fd3ff2f3a5a706bea6'
            '1028bac96ddcd18c10646dff26027b4891fcab4381436e2b6ea3302887a5586f'
            '2d6d55cad836eca187a7dfe40227f994e9b2f565e71fd39e296bc8bb73bf259a'
            '7a5ae05cad7ec14193a43ef080776b5525c80b6258762a6cb6a108db83861ff9')
backup=('etc/netbox/gunicorn_config.py' 'etc/netbox/configuration.py')

prepare() {
	cd "${srcdir}/${_name}-${pkgver}"

	patch -p0 -i "${srcdir}"/debug_toolbar_middleware.patch
}

package() {
	mkdir -p "${pkgdir}/opt/${_name}"
	chmod 775 "${pkgdir}/opt/${_name}"
	cp -r ${_name}-${pkgver}/${_name} "$pkgdir/opt/"

	install -D -m644 ${_name}-system.service "$pkgdir/usr/lib/systemd/system/${_name}.service"
	install -D -m644 ${_name}.tmpfile "$pkgdir/usr/lib/tmpfiles.d/${_name}.conf"

	mkdir -p "$pkgdir/etc/netbox"
	install -D -m644 gunicorn_config.py "$pkgdir/etc/netbox/gunicorn_config.py"
	install -D -m644 ${_name}-${pkgver}/${_name}/${_name}/configuration.example.py "$pkgdir/etc/netbox/configuration.py"
	ln -s /etc/netbox/configuration.py "$pkgdir/opt/netbox/netbox/configuration.py"
}

# vim: set ts=2 sw=2 ft=sh noet:
