# Maintainer: Ceriel Jacobs <2010 at probackup dot nl>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Jozef Holly <j2.00ghz@gmail.com>

pkgname=influxdb2-bin
pkgver=2.0.7
pkgrel=1
pkgdesc='Scalable datastore for metrics, events, and real-time analytics; Binary release;'
arch=('x86_64' 'aarch64')
url="https://portal.influxdata.com/downloads/"
license=('MIT')
depends=('glibc')
conflicts=('influxdb' 'influxdb-bin')
#backup=('etc/influxdb/config.toml' 'var/lib/influxdb/influxd.bolt')
install=influxdb.install

source_x86_64=("https://dl.influxdata.com/influxdb/releases/influxdb2-${pkgver}-linux-amd64.tar.gz")
source_aarch64=("https://dl.influxdata.com/influxdb/releases/influxdb2-${pkgver}-linux-arm64.tar.gz")

source=('influxdb.sysusers' 'influxdb.tmpfiles' 'influxdb.service.d')

package() {
  # users and groups
  install -Dm644 influxdb.sysusers "$pkgdir/usr/lib/sysusers.d/influxdb.conf"
  # directories and files
  install -Dm644 influxdb.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/influxdb.conf"
  # systemd
  install -Dm644 influxdb.service.d "$pkgdir/usr/lib/systemd/system/influxdb.service"
  # binaries
  if [[ $CARCH = 'aarch64' ]]; then
    cd "$srcdir/influxdb2-${pkgver}-linux-arm64"
  elif [[ $CARCH == 'x86_64' ]]; then
    cd "$srcdir/influxdb2-${pkgver}-linux-amd64"
  fi
  install -d "${pkgdir}/usr/bin/"
  install -Dm755 influx "${pkgdir}/usr/bin/influx"
  install -Dm755 influxd "${pkgdir}/usr/bin/influxd"
  # text files
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"

  # ToDos?
  #install -Dm644 etc/logrotate.d/influxdb "$pkgdir/etc/logrotate.d/influxdb"
  #sudo cp /root/.influxdbv2/configs /var/lib/influxdb
  #sudo chown influxdb:influxdb /var/lib/influxdb/influxd.bolt /var/lib/influxdb/configs
  #sudo chown -R influxdb:influxdb /var/lib/influxdb/engine
}
sha256sums=('5266afa264a210102ade9e777f9258baa38dcc500707b822a31b9a7e2e029439'
            '4be469656e630e9ab49653f3a7b51062712cf6fe892d76bf645f7e6feb4502ed'
            'f71a1780f3b21b638f08e556cb9410d1b8cc2aaafcdd2d340954ed8ba0809cd8')
sha256sums_x86_64=('bac6e6495b855479d325ea9996ad0301789613891daba2b386f84f1b11912d66')
sha256sums_aarch64=('55129ca31e5d0633c81ff17771d06c8604ad1a16be4f7c5c6142695a0bdb6ffc')
