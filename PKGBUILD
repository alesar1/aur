# Maintainer: Nils Czernia <nils@czserver.de>

pkgname=prometheus-postgresql-exporter
pkgver=0.8.0
pkgrel=1
pkgdesc="Prometheus exporter for PostrgreSQL"
arch=('x86_64' 'i686')
url="https://github.com/wrouesnel/postgres_exporter"
license=('Apache')
makedepends=('git' 'go')
source=("https://github.com/wrouesnel/postgres_exporter/archive/v${pkgver}.tar.gz"
        "prometheus-postgresql-exporter.service")
sha256sums=('27877c9b3aa751c7c1265f39986218f6a2c2b66a126cf348c6cc2f20f5201b02'
            'cda225c236df0e2a6d71c17a5390a92ed5cc7f71b8ca5843590c59fa02cdb135')

prepare() {
    cd "${srcdir}/postgres_exporter-${pkgver}"

    export GOPATH="${srcdir}/gopath"
    mkdir -p "${GOPATH}/src/github.com/wrouesnel"
    ln -snf "${srcdir}/postgres_exporter-${pkgver}" "${GOPATH}/src/github.com/wrouesnel/postgres_exporter"
}

build() {
    export GOPATH="${srcdir}/gopath"
    cd "${GOPATH}/src/github.com/wrouesnel/postgres_exporter"
    go run mage.go binary
}

check() {
    export GOPATH="${srcdir}/gopath"
    cd "${GOPATH}/src/github.com/wrouesnel/postgres_exporter"
    go run mage.go test
}

package() {
    cd "${srcdir}/postgres_exporter-${pkgver}"

    install -Dm755 "postgres_exporter" "${pkgdir}/usr/bin/prometheus_postgresql_exporter"
    install -Dm755 "${srcdir}/prometheus-postgresql-exporter.service" "${pkgdir}/usr/lib/systemd/system/prometheus-postgresql-exporter.service"
}
