# Maintainer: Lubomir 'Kuci' Kucera <kuci24-at-gmail-dot-com>

pkgname=gitlab-ci-multi-runner
pkgver=1.0.4
pkgrel=1
pkgdesc="The official GitLab CI runner written in Go"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')
url='https://gitlab.com/gitlab-org/gitlab-ci-multi-runner'
license=('GPLv3')
depends=('ca-certificates' 'curl' 'git' 'glibc' 'tar')
makedepends=('git' 'go' 'godep' 'go-bindata' 'mercurial')
install='gitlab-runner.install'
backup=('etc/gitlab-runner/config.toml')
noextract=('prebuilt.tar.gz')
source=("${pkgname}-${pkgver}.tar.gz"::"https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/repository/archive.tar.gz?ref=v${pkgver}"
        "https://gitlab-ci-multi-runner-downloads.s3.amazonaws.com/master/docker/prebuilt.tar.gz"
        "gitlab-runner.install"
        "gitlab-runner.service"
        "gitlab-runner.sysusers"
        "gitlab-runner.tmpfiles"
        "config.toml")
sha512sums=('bed302a1c53e745dce5c713d9f8b99ea513b8649ee9297863a1bcffd1297e5f7cf1305c6605efcdb619dc0f9db457905a33b30c9f90485173a0e7e7947d612ec'
            'SKIP'
            'd952618713a4ead9e8ac4d28bc5e3b1f9f0e7a36691d3abee40f73aa31d1b7dcff171c5ce62127b51ddf2c52ad490e7fa4bf0d928a3be793b813706588813535'
            'e0db2ecd45ba9472a9e9109b0254c12d1d27571fa28a01329dbd7f9aa32df33c1d8f1583a27a8105b1ee6e26e5ae5a6696248544f1f7a9d399271973d6a21fed'
            '648647fbffbf8dac5558d06d257e460f47ede45dc7e60b183091d03af96546b31fd6e8120b6b2e02af2e49f7aa094e472ef2db266a8b3baa8490a96afd915944'
            '6751d9fa0b27172d1b419c4138f5ac15cbc7c9147653a7258cf1470216142c637210bb60608c7ed0974e0e4057e5ddeae32225df1bb36e7dd1f20fec71e33cc3'
            'f39c23fc06636f31c3fadb9a630c54527e8255098f18d275772cb30875d0a7463717101704070d432f2b69ab71f076a9538172a439bc307722dad2c7e260f752')

prepare() {
    _srcdir=$(ls "${srcdir}" | grep -E "${pkgname}-v${pkgver}-[0-9a-f]{40}")
    mkdir -p "${srcdir}/src/gitlab.com/gitlab-org/"
    ln -sf "${srcdir}/${_srcdir}" "${srcdir}/src/gitlab.com/gitlab-org/${pkgname}"
    cd "${srcdir}/src/gitlab.com/gitlab-org/${pkgname}"
    GOPATH="${srcdir}" godep restore
    ln -sf "${srcdir}/prebuilt.tar.gz" prebuilt.tar.gz
}

build() {
    cd "${srcdir}/src/gitlab.com/gitlab-org/${pkgname}"
    GOPATH="${srcdir}" go-bindata \
        -pkg docker \
        -nocompress \
        -nomemcopy \
        -prefix out/docker/ \
        -o executors/docker/bindata.go \
        prebuilt.tar.gz
    GOPATH="${srcdir}" go build \
        -ldflags "-X main.NAME=${pkgname} -X main.VERSION=${pkgver} -X main.REVISION=unknown"
}

package() {
    cd "${srcdir}/src/gitlab.com/gitlab-org/${pkgname}"
    install -Dm644 "${srcdir}/config.toml" "${pkgdir}/etc/gitlab-runner/config.toml"
    install -Dm644 "${srcdir}/gitlab-runner.service" "${pkgdir}/usr/lib/systemd/system/gitlab-runner.service"
    install -Dm644 "${srcdir}/gitlab-runner.sysusers" "${pkgdir}/usr/lib/sysusers.d/gitlab-runner.conf"
    install -Dm644 "${srcdir}/gitlab-runner.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/gitlab-runner.conf"
    install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}
