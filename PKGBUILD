# Maintainer: Alexander Pohl <alex at ahpohl dot com>
pkgname=solarmeter
pkgver=0.0.3
pkgrel=2
epoch=
pkgdesc="Read energy from ABB Aurora inverter"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/ahpohl/solarmeter"
license=('MIT')
groups=()
depends=('mosquitto')
makedepends=()
checkdepends=()
optdepends=('nodejs-node-red' 'postgresql' 'timescaledb' 'pg_cron' 'grafana-bin')
provides=()
conflicts=()
replaces=()
backup=('etc/solarmeter.conf')
options=()
install=
changelog=
source=("$pkgname-$pkgver::git+https://github.com/ahpohl/solarmeter.git#tag=v${pkgver}"
        "sysusers_solarmeter.conf"
        "solarmeter.service")
noextract=()
sha256sums=('SKIP'
            '8c96a8c940a94b8b86312873ad93a2f2a01a2e1e9dbc52b074b04375189dc26b'
            '094505f8abb0a131186785ccd929050002d5741ed6d290794e94450a7ecaf5a3')
validpgpkeys=()

build() {
	cd "$pkgname-$pkgver"
  make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" PREFIX="/usr" install
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
  install -Dm644 README.md "$pkgdir"/usr/share/doc/$pkgname/README.md
  install -Dm644 CHANGELOG.md "$pkgdir"/usr/share/doc/$pkgname/CHANGELOG.md
  install -Dm644 "$srcdir"/sysusers_solarmeter.conf "$pkgdir"/usr/lib/sysusers.d/solarmeter.conf
  install -Dm644 "$srcdir"/solarmeter.service "$pkgdir"/usr/lib/systemd/system/solarmeter.service
  install -Dm644 resources/config/solarmeter_example.conf "$pkgdir"/etc/solarmeter.conf
  install -Dm644 resources/config/solarmeter_example.conf "$pkgdir"/usr/share/solarmeter/config/solarmeter_example.conf
  install -d "$pkgdir"/usr/share/solarmeter/postgres
  install -Dm644 resources/postgres/*.sql "$pkgdir"/usr/share/solarmeter/postgres
  install -Dm644 resources/nodejs/node-red-flow.json "$pkgdir"/usr/share/solarmeter/nodejs/node-red-flow.json
  install -Dm644 resources/grafana/grafana-dashboard.json "$pkgdir"/usr/share/solarmeter/grafana/grafana-dashboard.json
}
