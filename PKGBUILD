# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Lubomir 'Kuci' Kucera <kuci24-at-gmail-dot-com>
# Contributor: Franck Lucien Duriez <franck.lucien.duriez@gmail.com>

pkgname=gitlab-runner-arm64
pkgver=11.5.0
pkgrel=1
pkgdesc="The official GitLab CI runner written in Go (Requires a swap partition to build on Raspberry 3)"
arch=('aarch64')
url='https://gitlab.com/gitlab-org/gitlab-runner'
license=('GPL3')
depends=('ca-certificates' 'curl' 'git' 'glibc' 'tar')
makedepends=('git' 'go-pie' 'git' 'mercurial')
install='gitlab-runner.install'
replaces=('gitlab-ci-multi-runner')
backup=('etc/gitlab-runner/config.toml')
noextract=("prebuilt-${pkgver}-x86_64.tar.xz"
           "prebuilt-${pkgver}-arm.tar.xz")

source=("$pkgname-$pkgver.tar.gz::https://gitlab.com/api/v4/projects/gitlab-org%2Fgitlab-runner/repository/archive?sha=v${pkgver}"
        "prebuilt-${pkgver}-x86_64.tar.xz::https://gitlab-runner-downloads.s3.amazonaws.com/v${pkgver}/helper-images/prebuilt-x86_64.tar.xz"
        "prebuilt-${pkgver}-arm.tar.xz::https://gitlab-runner-downloads.s3.amazonaws.com/v${pkgver}/helper-images/prebuilt-arm.tar.xz"
        "gitlab-runner.service"
        "gitlab-runner.sysusers"
        "gitlab-runner.tmpfiles"
        "config.toml")
sha512sums=('7e03ca44b69693990e4ebfd52ca75a2db1abe6e360a60a1e009ef708d484f9de17a2db2e3cf52abd316519b4b2cdab5b7a670ebf5182aee73d38efdddc0c3863'
            'e23821b7334997c41025ff34f3f2375f09d74651888e388f7d4d4f862f17a2e09dd16462ce67bbe0afe36af1e1e219811707195fff283cde966b2149de15e1ed'
            '12fd6a876deadc292902cec7e8d760c466cea7a7df14264b69ce992ff63d96e513f458473c1158cff104532810bdcb80f963cc2f7316c3503a525935b54c231a'
            '8a5a8b7654d3864722e784b2814c6278c17876f1c0c4fc0676fbcf6817ad2ba4be55501e67ce88c62b5b63ca886b01afc6feac98ba49842acd244abdd1a8296f'
            '8aa7f08702e99053c696fcc2aaba83beb9e9cd6f31973d82862db9350ac46df3a095377625d31fe909677525290d2de922d7a97930ed235774cb8f0da8944d40'
            '6751d9fa0b27172d1b419c4138f5ac15cbc7c9147653a7258cf1470216142c637210bb60608c7ed0974e0e4057e5ddeae32225df1bb36e7dd1f20fec71e33cc3'
            'f39c23fc06636f31c3fadb9a630c54527e8255098f18d275772cb30875d0a7463717101704070d432f2b69ab71f076a9538172a439bc307722dad2c7e260f752')

_srcdir="gitlab-runner-v${pkgver}-"

prepare() {
    local revision=$(ls -d ${_srcdir}* | rev | cut -c 33-40 | rev)

    mkdir -p "${srcdir}/src/gitlab.com/gitlab-org/"
    ln -sf "${srcdir}/${_srcdir}"* "${srcdir}/src/gitlab.com/gitlab-org/gitlab-runner"
    cd "${srcdir}/src/gitlab.com/gitlab-org/gitlab-runner"

    local version=$(cat VERSION)

    sed -i "s/export VERSION.*/export VERSION = $version/" Makefile
    sed -i "s/REVISION := .*/REVISION := $revision/" Makefile

    make version

    ln -sf "${srcdir}/prebuilt-${pkgver}-x86_64.tar.xz" prebuilt-x86_64.tar.xz
    ln -sf "${srcdir}/prebuilt-${pkgver}-arm.tar.xz" prebuilt-arm.tar.xz
}

build() {
    cd "${srcdir}/src/gitlab.com/gitlab-org/gitlab-runner"
    make BUILD_PLATFORMS='-osarch linux/arm64' build
}

package() {
    cd "${srcdir}/src/gitlab.com/gitlab-org/gitlab-runner"

    install -Dm644 "${srcdir}/config.toml" "${pkgdir}/etc/gitlab-runner/config.toml"
    install -Dm644 "${srcdir}/gitlab-runner.service" "${pkgdir}/usr/lib/systemd/system/gitlab-runner.service"
    install -Dm644 "${srcdir}/gitlab-runner.sysusers" "${pkgdir}/usr/lib/sysusers.d/gitlab-runner.conf"
    install -Dm644 "${srcdir}/gitlab-runner.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/gitlab-runner.conf"
    install -Dm755 out/binaries/gitlab-runner-linux-arm64 "${pkgdir}/usr/bin/gitlab-runner"
}
