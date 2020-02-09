To setup mongo

https://zellwk.com/blog/install-mongodb/

If you’re on Catalina, you need to create the /data/db folder in System/Volumes/Data.

After installing mongodb-community

```
sudo mkdir -p /System/Volumes/Data/data/db (Create the data/db folder)
sudo chown -R `id -un` /System/Volumes/Data/data/db (Give permissions)
mongod --dbpath=/System/Volumes/Data/data/db (Change dbpath of mongodb)
mongod (Runs well)
```

OR

```
This is the main error:

exception in initAndListen: NonExistentPath: Data directory /data/db not found., terminating

Catalina has a surprise change: it won't allow changes to the root directory (this was discussed in a forum thread as well):

% sudo mkdir -p /data/db
mkdir: /data/db: Read-only file system
Unfortunately, this is not spelled out explicitly in Apple's Catalina release notes, other than a brief mention in Catalina features:

macOS Catalina runs in a dedicated, read-only system volume

Since the directory /data/db is coded as MongoDB default, a workaround is to specify a different dbpath that is not located on the root directory. For example:

mongod --dbpath ~/data/db
This will place MongoDB's data in your home directory. Just make sure that the path ~/data/db actually exists.

Alternative method

An alternative method is to follow the instructions at Install MongoDB Community Edition on macOS by leveraging brew:

brew tap mongodb/brew
brew install mongodb-community
This will create some additional files by default:

the configuration file (/usr/local/etc/mongod.conf)
the log directory path (/usr/local/var/log/mongodb)
the data directory path (/usr/local/var/mongodb)
To run mongod you can either:

Run the command manually from the command line (this can be aliased for convenience):

mongod --config /usr/local/etc/mongod.conf
Run MongoDB as a service using brew services. Note that this will run MongoDB as a standalone node (not a replica set), so features that depends on the oplog e.g. changestreams will not work unless you modify the mongod configuration file:

brew services start mongodb-community

```
