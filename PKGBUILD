# Maintainer: William Tang <galaxyking0419@gmail.com>
# Contributor: Chris Severance <aur.severach@spamgourmet.com>
# Contributor: David Roheim <david.roheim@gmail.com>

pkgname=hadoop
pkgver=3.3.4
pkgrel=1
pkgdesc='An open-source software for reliable, scalable, distributed computing'
arch=('x86_64')
url='https://hadoop.apache.org/'
license=('apache')
makedepends=('cmake' 'gcc' 'java-environment<=11' 'make' 'maven')
depends=('inetutils' 'java-runtime-headless-openjdk=11' 'openssh' 'protobuf')

source=("https://github.com/apache/hadoop/archive/refs/tags/rel/release-$pkgver.tar.gz"
        "${pkgname}" "${pkgname}.sh"
        hadoop-{datanode,historyserver,namenode,resourcemanager,secondarynamenode}.service)
sha256sums=('a10fb474084c5d38b93ae901b453794d668ca98aa419a0546807b10cdae17827'
            '1ec173297234b0d587255c1fac978b3929e967146ac542e2e1b44323f80e0bc5'
            '3d20dd2ad1b773e7d4cb855c7556613e36ff56081749fe7b01c6e4fd0c743cc5'
            '876d40b0a2ec9b9cec9b667d7909591ee0ef1acbd5417a0357c33539d8a54e1a'
            'f8f3b3a93a9e455da198ee93a873012399878459e78a3a7de0e396d69e81b61f'
            '3d4aa2a660bd509e658c8109d9e91c00b0f0eee3a2ecab71a4785a76529ea242'
            '2f6b8893a4b4e2ef120193ecfc2d929a8558d2a1c5b0af12e9224342ca90a158'
            'ed1e7f13d2023d49a51dc04c4459d12a53bff258a05b852a3e10a9fd2d18bbb8')

install=$pkgname.install

build() {
    cd hadoop-rel-release-${pkgver}
    mvn package -Pdist,native \
        -Drequire.openssl -Drequire.zstd \
        -Dmaven.javadoc.skip=true -DskipTests
}

package() {
    # Copy files to /usr
    mkdir "$pkgdir"/usr
    mv hadoop-rel-release-$pkgver/hadoop-dist/target/hadoop-$pkgver/* "$pkgdir"/usr/

    # Move sbin files to bin
    cd "$pkgdir"/usr
    mv sbin/* bin/
    rmdir sbin

    # Move native libraries to /usr/lib
    mv lib/native/* lib/
    rmdir lib/native

    # Move license and notice files
    mkdir -p "$pkgdir"/usr/share/licenses/$pkgname/
    mv licenses-binary/* LICENSE* NOTICE* README.txt "$pkgdir"/usr/share/licenses/$pkgname/
    rmdir licenses-binary

    # Remove windows batch files
    rm {etc/hadoop,bin,libexec,share/hadoop/tools/resourceestimator/bin}/*.cmd

    # Move etc directory
    mv "$pkgdir"/usr/etc "$pkgdir"/

    # Install profile script
    cd "$srcdir"
    mkdir "$pkgdir"/etc/profile.d
    cp $pkgname.sh "$pkgdir"/etc/profile.d/

    # Install eviroment file
    mkdir "$pkgdir"/etc/conf.d
    cp $pkgname "$pkgdir"/etc/conf.d/

    # Install systemd service files
    mkdir -p "$pkgdir"/usr/lib/systemd/system
    cp $pkgname-{datanode,historyserver,namenode,resourcemanager,secondarynamenode}.service "$pkgdir"/usr/lib/systemd/system/

    # Create required directories
    mkdir -p "$pkgdir"/var/{lib,log}/hadoop
}
